package com.jipps.tmplserver.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"memberNo", "name", "email"})
@Table(name="TB_MEMBER")
public class Member {

    @Id
    @Column(name = "MBNO")
    private String memberNo;
    private String name;
    private String email;
    private String address;

    public Member(String memberNo, String name, String email, String address) {
        this.memberNo = memberNo;
        this.name = name;
        this.email = email;
        this.address = address;
    }

    public Member(String memberNo, String name) {
        this.memberNo = memberNo;
        this.name = name;
    }
}
