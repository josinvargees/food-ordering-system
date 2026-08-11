package com.example.food_ordering_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="foods")
@Data
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    private String description;
    @Column(nullable = false)
    private Double price;
    private  String imageUr1;
    private Boolean available=true;
    @ManyToOne
    @JoinColumn(name="category_id")
    private Category category;


}
