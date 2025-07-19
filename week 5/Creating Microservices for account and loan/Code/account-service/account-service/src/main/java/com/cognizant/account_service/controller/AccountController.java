package com.cognizant.account_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @GetMapping("/accounts/status")
    public String getStatus() {
        return "✅ Account service is up and running!";
    }
}
