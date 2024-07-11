import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cryptospace.model.Planet;

@Repository
public interface PlanetRepository extends JpaRepository<Planet, Long> {

    List<Planet> findByNameContaining(String name);

    List<Planet> findByGalaxy(String galaxy);

    Planet findByNameAndGalaxy(String name, String galaxy);
}
