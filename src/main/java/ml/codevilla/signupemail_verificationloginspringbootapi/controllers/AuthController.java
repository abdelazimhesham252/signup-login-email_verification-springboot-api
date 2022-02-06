package ml.codevilla.signupemail_verificationloginspringbootapi.controllers;

import ml.codevilla.signupemail_verificationloginspringbootapi.payload.request.LoginRequest;
import ml.codevilla.signupemail_verificationloginspringbootapi.payload.request.SignupRequest;
import ml.codevilla.signupemail_verificationloginspringbootapi.payload.response.JwtResponse;
import ml.codevilla.signupemail_verificationloginspringbootapi.registration.token.ConfirmationTokenService;
import ml.codevilla.signupemail_verificationloginspringbootapi.repository.RoleRepository;
import ml.codevilla.signupemail_verificationloginspringbootapi.repository.UserRepository;
import ml.codevilla.signupemail_verificationloginspringbootapi.security.jwt.JwtUtils;
import ml.codevilla.signupemail_verificationloginspringbootapi.security.services.UserDetailsImpl;
import ml.codevilla.signupemail_verificationloginspringbootapi.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  UserDetailsServiceImpl userDetailsServiceImpl;

  @Autowired
  JwtUtils jwtUtils;

  @Autowired
  ConfirmationTokenService confirmationTokenService;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtUtils.generateJwtToken(authentication);
    
    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();    
    List<String> roles = userDetails.getAuthorities().stream()
        .map(item -> item.getAuthority())
        .collect(Collectors.toList());

    return ResponseEntity.ok(new JwtResponse(jwt,
                         userDetails.getId(), 
                         userDetails.getUsername(), 
                         userDetails.getEmail(), 
                         roles));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    return userDetailsServiceImpl.registerUser(signUpRequest);
  }

  @GetMapping(path = "confirm")
  public String confirm(@RequestParam("token") String token) {
    return userDetailsServiceImpl.confirmToken(token);
  }
}
