package packagScan.entity;


import javax.persistence.*;


@Entity
@Table(name = "SideBar")
public class Bar {

    @Id
    @Column(name="id")
    private Integer id;

    @Column(name ="bar")
    private String bar;



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBar() {
        return bar;
    }

    public void setBar(String bar) {
        this.bar = bar;
    }
}
