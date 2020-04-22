package packagScan.entity;


import javax.persistence.*;

@Entity
public class SideBar {

    @Id
  private   long id;

    private  String nameBar;
    private  long levelBar;
    private long perent_id;
    private   long orderBar;
    private  long linked_id;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNameBar() {
        return nameBar;
    }

    public void setNameBar(String nameBar) {
        this.nameBar = nameBar;
    }

    public long getLevelBar() {
        return levelBar;
    }

    public void setLevelBar(long levelBar) {
        this.levelBar = levelBar;
    }

    public long getPerent_id() {
        return perent_id;
    }

    public void setPerent_id(long perent_id) {
        this.perent_id = perent_id;
    }

    public long getOrderBar() {
        return orderBar;
    }

    public void setOrderBar(long orderBar) {
        this.orderBar = orderBar;
    }

    public long getLinked_id() {
        return linked_id;
    }

    public void setLinked_id(long linked_id) {
        this.linked_id = linked_id;
    }
}
