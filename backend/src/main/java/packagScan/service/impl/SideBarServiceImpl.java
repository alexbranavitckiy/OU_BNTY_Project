package packagScan.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import packagScan.entity.Bar;
import packagScan.repository.SdeBarRepository;
import packagScan.service.SideBarService;

@Service
public class SideBarServiceImpl implements SideBarService {


    private SdeBarRepository sdeBarRepository;

    @Autowired
    public SideBarServiceImpl(SdeBarRepository sdeBarRepository) {
        this.sdeBarRepository = sdeBarRepository;
    }

   // @Override
    //    public Iterable<Bar> getAll() {
    //        return sdeBarRepository.findAll();
    //    }
}
