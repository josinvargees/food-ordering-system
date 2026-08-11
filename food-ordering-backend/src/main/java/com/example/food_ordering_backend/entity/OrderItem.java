package com.example.food_ordering_backend.entity;
import jakarta.persistence.*;
import lombok.Data;
@Entity
@Table(name = "order_items")
@Data
public class OrderItem {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private Integer quantity;

        private Double price;

        @ManyToOne
        @JoinColumn(name = "food_id")
        private Food food;

        @ManyToOne
        @JoinColumn(name = "order_id")
        private Orders order;
}

