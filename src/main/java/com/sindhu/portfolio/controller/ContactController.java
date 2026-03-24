package com.sindhu.portfolio.controller;

import com.sindhu.portfolio.model.Contact;
import com.sindhu.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ContactRepository repo;

    @PostMapping
    public Contact saveMessage(@RequestBody Contact contact) {
        return repo.save(contact);
    }
}