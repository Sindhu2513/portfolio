package com.sindhu.portfolio.controller;

import com.sindhu.portfolio.model.Contact;
import com.sindhu.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactRepository repo;

    @GetMapping
    public String test() {
        return "API is working!";
    }
    @PostMapping
    public Contact saveMessage(@RequestBody Contact contact) {
        return repo.save(contact);
    }
}
