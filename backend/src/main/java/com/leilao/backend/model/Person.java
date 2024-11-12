package com.leilao.backend.model;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

@Entity
@Data // Incluí get e set
@Table(name = "person")
@JsonIgnoreProperties({"authorities"})
public class Person implements UserDetails{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    //@UniqueElements(message = "Email já cadastrado")
    private String email;

    private String cpf;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Transient
    private static final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void setPassword(String password) {
        this.password = passwordEncoder.encode(password);
    }

    @JsonIgnore
    @Column(name = "validation_code")
    private String validationCode;
    // @Temporal(TemporalType.TIMESTAMP)
    //private Date validationCodeValidity;
    private LocalDateTime validationCodeValidity;

    @OneToMany(mappedBy = "person", orphanRemoval = true, cascade = CascadeType.ALL)

    @Setter(value = AccessLevel.NONE) //Desabilita o set para que não seja possível alterar a lista diretamente
    private List<PersonProfile> personProfile;

    public void setPersonProfile(List<PersonProfile> lpp) {
        for(PersonProfile p : lpp){
            p.setPerson(this);
        }
        personProfile = lpp;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return personProfile.stream().map(userRole -> new SimpleGrantedAuthority(userRole.getProfile().getName())).collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return email;
    }



}
