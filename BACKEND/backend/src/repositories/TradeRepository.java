import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cryptospace.model.Trade;

@Repository
public interface TradeRepository extends JpaRepository<Trade, Long> {

    List<Trade> findByBuyerUsername(String username);

    List<Trade> findBySellerUsername(String username);

    List<Trade> findByPlanetId(Long planetId);

    List<Trade> findByResourceType(String resourceType);

    List<Trade> findByStatus(Trade.Status status);

    List<Trade> findByBuyerUsernameAndStatus(String username, Trade.Status status);

    List<Trade> findBySellerUsernameAndStatus(String username, Trade.Status status);
}
@Service
public class TradeService {

    @Autowired
    private TradeRepository tradeRepository;

    public List<Trade> getTradesByBuyer(String username) {
        return tradeRepository.findByBuyerUsername(username);
    }

    public List<Trade> getTradesBySeller(String username) {
        return tradeRepository.findBySellerUsername(username);
    }

    public List<Trade> getTradesByPlanet(Long planetId) {
        return tradeRepository.findByPlanetId(planetId);
    }

    public List<Trade> getTradesByStatus(Trade.Status status) {
        return tradeRepository.findByStatus(status);
    }
}
