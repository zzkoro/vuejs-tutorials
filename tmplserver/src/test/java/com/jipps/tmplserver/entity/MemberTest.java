package com.jipps.tmplserver.entity;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class MemberTest {
    @Autowired
    EntityManager entityManager;

    @Test
    void test() {
        // given
        Member member = new Member("C001", "one");
        entityManager.persist(member);

        entityManager.flush();
        entityManager.clear();

        // when
        JPAQueryFactory queryFactory = new JPAQueryFactory(entityManager);
        QMember qMember = new QMember("m");
        Member found = queryFactory.selectFrom(qMember).fetchOne();

        // then
        assertEquals(found, member);
    }
}