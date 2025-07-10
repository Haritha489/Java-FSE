package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class SpringLearnApplication {

	public static void main(String[] args) throws ParseException {
		SpringApplication.run(SpringLearnApplication.class, args);
		System.out.println("Running Hands-on 2...");
		displayDate();
	}

	public static void displayDate() throws ParseException {
		ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
		SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
		String dateString = "31/12/2018";
		Date date = format.parse(dateString);
		System.out.println(date);
	}
}
