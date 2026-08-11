package com.example.food_ordering_backend.controller;


import com.example.food_ordering_backend.entity.Cart;
import com.example.food_ordering_backend.service.CartService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }
    @PostMapping
    public Cart  addToCart(@RequestBody Cart cart){
        return cartService.addToCart(cart);
    }
    @GetMapping("/{userid}")
    public List<Cart> getCart(@PathVariable Long userid){
        return cartService.getCartByUser(userid);
    }
    @DeleteMapping("/{id}")
    public String deleteCart(@PathVariable Long id){
        cartService.deleteCartItem(id);
        return "Cart Item deleted successfully";
    }

}
