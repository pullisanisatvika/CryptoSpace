import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cryptospace.model.Spaceship;

@Repository
public interface SpaceshipRepository extends JpaRepository<Spaceship, Long> {

    List<Spaceship> findByOwnerUsername(String username);

    Spaceship findByCallsign(String callsign);

    List<Spaceship> findByLocationPlanetId(Long planetId);

    List<Spaceship> findByLocationPlanetName(String planetName);
}
@Service
public class SpaceshipService {

    @Autowired
    private SpaceshipRepository spaceshipRepository;

    public List<Spaceship> getSpaceshipsByOwner(String username) {
        return spaceshipRepository.findByOwnerUsername(username);
    }

    public Spaceship getSpaceshipByCallsign(String callsign) {
        return spaceshipRepository.findByCallsign(callsign);
    }

    public List<Spaceship> getSpaceshipsByLocation(Long planetId) {
        return spaceshipRepository.findByLocationPlanetId(planetId);
    }
}
