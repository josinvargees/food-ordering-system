package com.example.food_ordering_backend.repository;

import com.example.food_ordering_backend.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food,Long> {
}
