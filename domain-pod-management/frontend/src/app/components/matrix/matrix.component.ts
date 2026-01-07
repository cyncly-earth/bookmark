import { Component } from '@angular/core';
import { Domain } from '../../models/domain.model';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html'
})
export class MatrixComponent {

  searchText = '';

  readonly pods: string[] = ['Pod 1', 'Pod 2', 'Pod 3', 'Pod 4', 'Pod 5'];

  domains: Domain[] = [
    {
      name: 'Domain 1',
      members: ['Atif', 'Adijith', 'Averine', 'Meghana', 'Rithin']
    },
    {
      name: 'Domain 2',
      members: ['Aastha', 'Sahaf', 'Nipun', 'Aswin', 'Ahnah']
    }
  ];

  /* ---------------- ADD MEMBER ---------------- */

  addMember(): void {
    const name = prompt('Enter member name')?.trim();
    const domainNo = Number(prompt('Enter domain number'));
    const podNo = Number(prompt('Enter pod number (1 to 5)'));

    if (!name) {
      alert('Member name is required');
      return;
    }

    const domainIndex = domainNo - 1;
    const podIndex = podNo - 1;

    if (!this.isValidDomain(domainIndex) || !this.isValidPod(podIndex)) {
      alert('Invalid domain or pod');
      return;
    }

    if (this.domains[domainIndex].members[podIndex]) {
      alert('Pod already occupied');
      return;
    }

    if (this.isDuplicateMember(name)) {
      alert('Member already exists');
      return;
    }

    this.domains[domainIndex].members[podIndex] = name;
  }

  /* ---------------- DELETE MEMBER ---------------- */

  deleteMember(domainIndex: number, podIndex: number): void {
    if (this.isValidDomain(domainIndex) && this.isValidPod(podIndex)) {
      this.domains[domainIndex].members[podIndex] = '';
    }
  }

  /* ---------------- DELETE DOMAIN ---------------- */

  deleteDomain(index: number): void {
    if (confirm('Are you sure you want to delete this domain?')) {
      this.domains.splice(index, 1);
    }
  }

  /* ---------------- HELPER METHODS ---------------- */

  private isValidDomain(index: number): boolean {
    return index >= 0 && index < this.domains.length;
  }

  private isValidPod(index: number): boolean {
    return index >= 0 && index < this.pods.length;
  }

  private isDuplicateMember(name: string): boolean {
    return this.domains.some(domain =>
      domain.members.some(member =>
        member?.toLowerCase() === name.toLowerCase()
      )
    );
  }
}
