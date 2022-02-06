package ml.codevilla.signupemail_verificationloginspringbootapi.security.services;

import ml.codevilla.signupemail_verificationloginspringbootapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository UserRepository;

    public int enableAppUser(String email) {
        return UserRepository.enableAppUser(email);
    }

}
