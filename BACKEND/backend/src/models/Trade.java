import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Trade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double amount;

    private String commodity;

    private double price;

    private LocalDateTime timestamp;

    @ManyToOne
    @JsonIgnore
    private Spaceship spaceship;

    @ManyToOne
    @JsonIgnore
    private Planet planet;

    public Trade(double amount, String commodity, double price, LocalDateTime timestamp) {
        this.amount = amount;
        this.commodity = commodity;
        this.price = price;
        this.timestamp = timestamp;
    }
}
