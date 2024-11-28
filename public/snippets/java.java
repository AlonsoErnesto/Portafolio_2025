package com.example.portfolio;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class PortfolioApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
    }

    @Override
    public void run(String... args) {
        String name = "Ernesto Alonso";
        String role = "Software Engineer";
        int experience = 1;
        List<String> technologies = List.of("Java", "Spring", "Spring Boot", "MVC", "Hibernate", "REST APIs");

        System.out.println("=== About Me ===");
        System.out.println("Name: " + name);
        System.out.println("Role: " + role);
        System.out.println("Experience: " + experience + " year" + (experience > 1 ? "s" : ""));
        System.out.println("\nTechnologies I Use:");
        technologies.forEach(tech -> System.out.println("- " + tech));
        System.out.println("\nThank you for reviewing my profile!");
    }
}
