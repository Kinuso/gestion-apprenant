<?php

namespace App\Models;

use App\Services\Hydratation;

class User
{
  private int $IdUser;
  private string $LastName;
  private string $FirstName;
  private string $Password;
  private string $Address;
  private int $Telephone;
  private bool $UserRole;
  private string $Mail;


  use Hydratation;



  /**
   * Get the value of IdUser
   */
  public function getIdUser(): int
  {
    return $this->IdUser;
  }

  /**
   * Set the value of IdUser
   */
  public function setIdUser(int $IdUser): self
  {
    $this->IdUser = $IdUser;

    return $this;
  }

  /**
   * Get the value of LastName
   */
  public function getLastName(): string
  {
    return $this->LastName;
  }

  /**
   * Set the value of LastName
   */
  public function setLastName(string $LastName): self
  {
    $this->LastName = $LastName;

    return $this;
  }

  /**
   * Get the value of FirstName
   */
  public function getFirstName(): string
  {
    return $this->FirstName;
  }

  /**
   * Set the value of FirstName
   */
  public function setFirstName(string $FirstName): self
  {
    $this->FirstName = $FirstName;

    return $this;
  }

  /**
   * Get the value of Password
   */
  public function getPassword(): string
  {
    return $this->Password;
  }

  /**
   * Set the value of Password
   */
  public function setPassword(string $Password): self
  {
    $this->Password = $Password;

    return $this;
  }

  /**
   * Get the value of Address
   */
  public function getAddress(): string
  {
    return $this->Address;
  }

  /**
   * Set the value of Address
   */
  public function setAddress(string $Address): self
  {
    $this->Address = $Address;

    return $this;
  }

  /**
   * Get the value of Telephone
   */
  public function getTelephone(): int
  {
    return $this->Telephone;
  }

  /**
   * Set the value of Telephone
   */
  public function setTelephone(int $Telephone): self
  {
    $this->Telephone = $Telephone;

    return $this;
  }

  /**
   * Get the value of UserRole
   */
  public function isUserRole(): bool
  {
    return $this->UserRole;
  }

  /**
   * Set the value of UserRole
   */
  public function setUserRole(bool $UserRole): self
  {
    $this->UserRole = $UserRole;

    return $this;
  }

  /**
   * Get the value of Mail
   */
  public function getMail(): string
  {
    return $this->Mail;
  }

  /**
   * Set the value of Mail
   */
  public function setMail(string $Mail): self
  {
    $this->Mail = $Mail;

    return $this;
  }
}
