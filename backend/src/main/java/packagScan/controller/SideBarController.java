package packagScan.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import packagScan.entity.Bar;
import packagScan.service.SideBarService;

@RestController
@RequestMapping("/SideBar")
public class SideBarController {


    private SideBarService sideBarService;

    @Autowired
    public SideBarController(SideBarService sideBarService) {
        this.sideBarService = sideBarService;
    }


    @GetMapping(value = "/all")
    public Iterable<Bar> getAll() {
        System.out.println("/all");
        return null; //sideBarService.getAll();
    }


}
