package com.example.food_ordering_backend.repository;

import com.example.food_ordering_backend.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Orders,Long> {
}
