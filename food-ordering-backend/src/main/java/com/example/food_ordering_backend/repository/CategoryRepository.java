package com.example.food_ordering_backend.repository;

import com.example.food_ordering_backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
