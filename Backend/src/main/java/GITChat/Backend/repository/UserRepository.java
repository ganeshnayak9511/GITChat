package GITChat.Backend.repository;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import GITChat.Backend.entity.User;
//@Repository
public interface UserRepository extends JpaRepository<User, UUID> {

    Optional<User> findByGithubId(long githubId);
}