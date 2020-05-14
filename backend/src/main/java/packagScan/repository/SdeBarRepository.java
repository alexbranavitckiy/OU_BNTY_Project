package packagScan.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import packagScan.entity.Bar;

@Repository
public interface SdeBarRepository  extends CrudRepository<Bar,Integer> {

}

