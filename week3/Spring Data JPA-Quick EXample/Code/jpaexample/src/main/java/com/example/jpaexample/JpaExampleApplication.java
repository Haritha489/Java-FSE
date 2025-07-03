package com.example.jpaexample;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JpaExampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(JpaExampleApplication.class, args);
	}

	@Bean
	CommandLineRunner run(BookRepository bookRepository) {
		return args -> {
			bookRepository.save(new Book("The Alchemist", "Paulo Coelho"));
			bookRepository.save(new Book("1984", "George Orwell"));

			System.out.println("Books in DB:");
			bookRepository.findAll().forEach(book -> {
				System.out.println(book.getId() + " - " + book.getTitle());
			});
		};
	}
}
