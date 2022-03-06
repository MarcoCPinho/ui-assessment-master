import React, { useCallback, useRef, useState } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from 'services/api';

import { getValidationErrors } from 'utils/getValidationErrors';

import { IErrors, ISignUpFormData } from 'interfaces';
import { useAuth } from 'hooks/auth';
import { AnimationContainer } from 'components/AnimationContainer';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

export const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { createUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (data: ISignUpFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name required!'),
          email: Yup.string()
            .required('E-mail required!')
            .email('Invalid e-mail!'),
          password: Yup.string().min(6, 'At least 6 characters'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // await api.post('/user', data);

        await createUser(data);

        navigate('/');

        toast.success('Success!. You can now login!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        toast.error(
          err instanceof Error
            ? err.message
            : 'Something went wrong, try again later.',
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
        setLoading(false);
      }
    },
    [navigate, createUser],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Feefo Notes" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Register</h1>

            <Input name="name" icon={FiUser} placeholder="Name" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit" loading={loading}>
              Create user
            </Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Back to Login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
