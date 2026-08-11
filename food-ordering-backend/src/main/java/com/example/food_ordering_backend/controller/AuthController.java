package com.example.food_ordering_backend.controller;

import com.example.food_ordering_backend.dto.LoginRequest;
import com.example.food_ordering_backend.dto.LoginResponse;
import com.example.food_ordering_backend.dto.RegisterRequest;
import com.example.food_ordering_backend.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {
    private final AuthService authService;
    public  AuthController(AuthService authService) {
        this.authService = authService;
    }
    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request){
        return authService.register(request);
    }
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request){
        return authService.login(request);
    }
}
