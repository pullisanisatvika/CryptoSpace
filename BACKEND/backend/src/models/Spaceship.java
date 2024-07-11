import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Spaceship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String model;

    private double speed;

    private double capacity;

    @ManyToOne
    @JsonIgnore
    private Planet currentPlanet;

    @ManyToMany
    @JsonIgnore
    private List<CrewMember> crew;

    public Spaceship(String name, String model, double speed, double capacity) {
        this.name = name;
        this.model = model;
        this.speed = speed;
        this.capacity = capacity;
    }

    @JsonProperty("current_planet")
    public String getCurrentPlanetName() {
        return currentPlanet != null ? currentPlanet.getName() : null;
    }
}
