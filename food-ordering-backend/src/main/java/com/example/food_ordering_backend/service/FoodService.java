package com.example.food_ordering_backend.service;

import com.example.food_ordering_backend.entity.Food;
import com.example.food_ordering_backend.repository.FoodRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {
    private final FoodRepository foodRepository;
    public  FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }
    public List<Food> getAllFoods(){
        return foodRepository.findAll();
    }
    public Food saveFood(Food food){
        return foodRepository.save(food);
    }
}
