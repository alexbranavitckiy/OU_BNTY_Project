package packagScan.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.http.client.OkHttp3ClientHttpRequestFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/priority")
public class ModelController {


    @GetMapping(value = "/all")

    public ResponseEntity getAllUser() {
        return ResponseEntity.ok(OkHttp3ClientHttpRequestFactory.class);
    }





}
