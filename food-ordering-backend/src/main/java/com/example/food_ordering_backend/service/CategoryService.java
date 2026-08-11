package com.example.food_ordering_backend.service;

import com.example.food_ordering_backend.entity.Category;
import com.example.food_ordering_backend.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;
    public
    CategoryService(CategoryRepository  categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    public List<Category>getAllCategories(){
        return categoryRepository.findAll();
    }
}
