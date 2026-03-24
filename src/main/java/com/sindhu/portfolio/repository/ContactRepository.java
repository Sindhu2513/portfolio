package com.sindhu.portfolio.repository;

import com.sindhu.portfolio.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}