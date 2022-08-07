package com.jipps.tmplserver.service;

import com.jipps.tmplserver.entity.Member;
import com.jipps.tmplserver.entity.QMember;
import com.jipps.tmplserver.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public Optional<Member> getMember(String id) {
        return memberRepository.findById(id);
    }

    public Optional<Member> getMemberByName(String name) {
        QMember member = QMember.member;
        return memberRepository.findOne(member.name.eq("aaa").and(member.email.eq("bbb")));
    }
}
