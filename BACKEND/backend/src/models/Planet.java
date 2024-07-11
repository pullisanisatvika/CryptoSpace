import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Planet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private double mass;

    private double radius;

    @OneToMany(mappedBy = "planet")
    @JsonIgnore
    private List<Moon> moons;

    public Planet(String name, String description, double mass, double radius) {
        this.name = name;
        this.description = description;
        this.mass = mass;
        this.radius = radius;
    }
}
