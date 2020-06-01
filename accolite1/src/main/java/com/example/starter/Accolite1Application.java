package com.example.starter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.example.starter","com.example.user"})
public class Accolite1Application {

	public static void main(String[] args) {
		SpringApplication.run(Accolite1Application.class, args);
	}

}
