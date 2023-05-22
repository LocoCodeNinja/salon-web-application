package entity;

import jakarta.persistence.*;

@Entity
@Table(name = "booking_history", schema = "greenmango", catalog = "")
public class BookingHistoryEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "appointment_id", nullable = false)
    private int appointmentId;
    @Basic
    @Column(name = "note", nullable = false, length = -1)
    private String note;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
