package ml.codevilla.signupemail_verificationloginspringbootapi.registration.token;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ml.codevilla.signupemail_verificationloginspringbootapi.appuser.AppUser;
import ml.codevilla.signupemail_verificationloginspringbootapi.models.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class ConfirmationToken {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "confirmation_sequence"
    )
    @SequenceGenerator(
            name= "confirmation_sequence",
            sequenceName = "confirmation_sequence",
            allocationSize = 1
    )
    private Long id;

    @Column(nullable = false)
    private String token;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime expiresAt;

    private LocalDateTime confirmedAt;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "app_user_id"
    )
    private User user;

    public ConfirmationToken(String token,
                             LocalDateTime createdAt,
                             LocalDateTime expiresAt,
                             User user
                            ) {
        this.token = token;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
        this.user = user;
    }
}
