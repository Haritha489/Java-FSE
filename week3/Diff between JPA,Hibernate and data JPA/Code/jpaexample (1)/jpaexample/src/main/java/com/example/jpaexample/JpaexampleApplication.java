package com.example.jpaexample;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JpaexampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(JpaexampleApplication.class, args);
	}

	@Bean
	public CommandLineRunner run(BookRepository repository) {
		return args -> {
			repository.save(new Book("The Hobbit", "J.R.R. Tolkien"));
			repository.save(new Book("Pride and Prejudice", "Jane Austen"));

			System.out.println("📚 Books in database:");
			repository.findAll().forEach(book ->
					System.out.println(book.getId() + ": " + book.getTitle()));
		};
	}
}
