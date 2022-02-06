package ml.codevilla.signupemail_verificationloginspringbootapi.email;

public interface EmailSender {

    public void send(String to, String email);
}
