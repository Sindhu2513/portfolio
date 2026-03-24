package com.sindhu.portfolio.service;

import com.sindhu.portfolio.model.Project;
import com.sindhu.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository repo;

    public List<Project> getAllProjects() {
        return repo.findAll();
    }

    public Project saveProject(Project project) {
        return repo.save(project);
    }
}
