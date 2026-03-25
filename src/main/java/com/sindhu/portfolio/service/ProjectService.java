package com.sindhu.portfolio.service;

import com.sindhu.portfolio.model.Project;
import com.sindhu.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    public List<String> getProjects() {
        return List.of("Portfolio Website", "Stock Tracker", "Finance AI App");
    }
}