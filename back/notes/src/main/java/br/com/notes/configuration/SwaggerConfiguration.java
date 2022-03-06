package br.com.notes.configuration;

import com.google.common.base.Predicates;
import org.springframework.boot.web.embedded.jetty.JettyServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMethod;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ResponseMessage;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
    @Bean
    public JettyServletWebServerFactory embeddedServletContainerFactory() {
        return new JettyServletWebServerFactory();
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2) //
                .useDefaultResponseMessages(false) //
                .globalResponseMessage(RequestMethod.GET, getResponseMessages()) //
                .globalResponseMessage(RequestMethod.HEAD, getResponseMessages()) //
                .globalResponseMessage(RequestMethod.POST, getResponseMessages()) //
                .globalResponseMessage(RequestMethod.PUT, getResponseMessages()) //
                .globalResponseMessage(RequestMethod.PATCH, getResponseMessages()) //
                .globalResponseMessage(RequestMethod.DELETE, getResponseMessages()) //
                .globalResponseMessage(RequestMethod.OPTIONS, getResponseMessages()) //
                .globalResponseMessage(RequestMethod.TRACE, getResponseMessages()) //
                .select() //
                .apis(Predicates.or(RequestHandlerSelectors.basePackage("br.com.notes"))) //
                .paths(PathSelectors.any()) //
                .build().apiInfo(getApiInfo());
    }

    private List<ResponseMessage> getResponseMessages() {
        List<ResponseMessage> responseMessages = new ArrayList<>();

        return responseMessages;
    }

    private ApiInfo getApiInfo() {
        return new ApiInfo("Notes 1.0 API", "Notes", "1.0", //
                "Marco Pinho - marcocpinho@hotmail.com", "Todos os direitos reservados", "", "");
    }
}
