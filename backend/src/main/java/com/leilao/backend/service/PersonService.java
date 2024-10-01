package com.leilao.backend.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leilao.backend.model.Person;
import com.leilao.backend.repository.PersonRepository;

@Service
public class PersonService {
    
    @Autowired
    private PersonRepository personRepository;

    public Person create(Person person){
        //Profile profileSaved = profileRepository.save(profile);
        //return profileSaved;
        return personRepository.save(person);
    }

    public Person update(Person person){
        //return profileRepository.save(profile);
        Person personSaved = personRepository.findById(person.getId()).orElseThrow(() -> new NoSuchElementException("Objeto nao encontrado"));
        
        personSaved.setName(person.getName());
        personSaved.setEmail(person.getEmail());
        
        return personRepository.save(personSaved);
    }
    
}
