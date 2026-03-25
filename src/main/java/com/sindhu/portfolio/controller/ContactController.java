package com.sindhu.portfolio.controller;

import com.sindhu.portfolio.model.Contact;
import com.sindhu.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")  // temporary fix
public class ContactController {

    @PostMapping
    public String saveContact(@RequestBody Contact contact) {
        return "Message received successfully 🚀";
    }
}