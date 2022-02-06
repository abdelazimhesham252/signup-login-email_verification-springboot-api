package ml.codevilla.signupemail_verificationloginspringbootapi.repository;

import ml.codevilla.signupemail_verificationloginspringbootapi.models.ERole;
import ml.codevilla.signupemail_verificationloginspringbootapi.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
