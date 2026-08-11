package com.example.food_ordering_backend.controller;
import com.example.food_ordering_backend.entity.Food;
import com.example.food_ordering_backend.service.FoodService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foods")
public class FoodController {
    private final FoodService foodService;
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }
    @GetMapping
public List<Food> getAllFoods(){
        return foodService.getAllFoods();
    }
    @PostMapping
    public Food saveFood(@RequestBody Food food){
        return foodService.saveFood(food);
    }
}
