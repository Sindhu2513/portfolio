package com.sindhu.portfolio.controller;

import com.sindhu.portfolio.model.Project;
import com.sindhu.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:5173") 
public class ProjectController {

    @Autowired
    private ProjectService service;

    @GetMapping
    public List<Project> getProjects() {
        return service.getAllProjects();
    }

    @PostMapping
    public Project addProject(@RequestBody Project project) {
        return service.saveProject(project);
    }
}
