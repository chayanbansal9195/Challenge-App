package com.challengeapp.ChallengeApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ChallengeService {

    private List<Challenge> challenges = new ArrayList<Challenge>();

    @Autowired
    ChallengeRepository challengeRepository;

    public List<Challenge> getAllChallenges(){
        return challengeRepository.findAll();
    }

    public boolean addChallenge( Challenge challenge){
        if(challenge!=null){
            challengeRepository.save(challenge);
            return true;
        }
        else{
            return false;
        }

    }

    public Challenge getChallenge(String month) {
        Optional<Challenge> challenge=challengeRepository.findByMonthIgnoreCase(month);
        return challenge.orElse(null);
    }

    public boolean updateChallenge(Long id, Challenge updatedChallenge) {
        Optional<Challenge> challenge= challengeRepository.findById(id);

        if(challenge.isPresent()) {
            Challenge challengeToUpdate = challenge.get();
            challengeToUpdate.setMonth(updatedChallenge.getMonth());
            challengeToUpdate.setDescription(updatedChallenge.getDescription());
            challengeRepository.save(challengeToUpdate);
            return true;
        }
//        for(Challenge challenge:challenges){
//            if(challenge.getId().equals(id)){
//                challenge.setMonth(updatedChallenge.getMonth());
//                challenge.setDescription(updatedChallenge.getDescription());
//                return true;
//            }
        return false;
    }

    public boolean deleteChallenge(Long id) {
//        return challenges.removeIf(challenge -> challenge.getId().equals(id));
        Optional<Challenge> challenge = challengeRepository.findById(id);
        if(challenge.isPresent()){
            challengeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
