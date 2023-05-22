package entity;

import jakarta.persistence.*;

@Entity
@Table(name = "reviews", schema = "greenmango", catalog = "")
public class ReviewsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "customer_name", nullable = false, length = 255)
    private String customerName;
    @Basic
    @Column(name = "rating", nullable = false)
    private int rating;
    @Basic
    @Column(name = "review_text", nullable = false, length = -1)
    private String reviewText;
    @Basic
    @Column(name = "service_id", nullable = false)
    private int serviceId;
    @Basic
    @Column(name = "staff_id", nullable = false)
    private int staffId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public int getServiceId() {
        return serviceId;
    }

    public void setServiceId(int serviceId) {
        this.serviceId = serviceId;
    }

    public int getStaffId() {
        return staffId;
    }

    public void setStaffId(int staffId) {
        this.staffId = staffId;
    }
}
