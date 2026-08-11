package com.example.food_ordering_backend.service;

import com.example.food_ordering_backend.entity.Cart;
import com.example.food_ordering_backend.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    private final CartRepository cartRepository;
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }
    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }
    public List<Cart> getCartByUser(Long userId) {
        return cartRepository.findByUserId(userId);
    }
    public void deleteCartItem(Long id) {
        cartRepository.deleteById(id);
    }
}
