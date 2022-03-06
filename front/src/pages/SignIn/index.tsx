import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import logoImg from 'assets/logo.svg';
import Button from 'components/Button';
import Input from 'components/Input';
import { useAuth } from 'hooks/auth';
import { ISignInFormData } from 'interfaces';
import React, { useCallback, useRef, useState } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { getValidationErrors } from 'utils/getValidationErrors';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { AnimationContainer } from 'components/AnimationContainer';
import { Background, Container, Content } from './styles';

export const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { signIn, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email required')
            .email('Invalid e-mail!'),
          password: Yup.string().required('Password required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        navigate('/notes');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error(
          err instanceof Error
            ? err.message
            : 'There was an error logging in, check the credentials.',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );
      } finally {
        if (loading) setLoading(false);
      }
    },
    [signIn, navigate, loading],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Feefo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Login</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit" loading={loading}>
              Sign In
            </Button>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Sign Up
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
